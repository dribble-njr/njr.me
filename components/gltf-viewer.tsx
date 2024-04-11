import { Box, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import {
  AmbientLight,
  Box3,
  PerspectiveCamera,
  SRGBColorSpace,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface GLTFViewerProps {
  url: string // gltf path
}

const GLTFViewer: FC<GLTFViewerProps> = ({ url }) => {
  const containerRef = useRef<HTMLDivElement>()
  const rendererRef = useRef<WebGLRenderer>()
  const cameraRef = useRef<PerspectiveCamera>()
  const reqIdRef = useRef<number>()
  const { basePath } = useRouter()

  const [loading, setLoading] = useState(true)

  const loadModel = (url: string) => {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader()

      const draco = new DRACOLoader()
      draco.setDecoderConfig({ type: 'js' })
      draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

      loader.setDRACOLoader(draco)

      loader.load(
        basePath + url,
        gltf => {
          const obj = gltf.scene || gltf.scenes[0]
          resolve(obj)
        },
        xhr => {
          console.log(xhr)
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        reject
      )
    })
  }

  const handleWindowResize = useCallback(() => {
    const { current: container } = containerRef
    const { current: renderer } = rendererRef
    const { current: camera } = cameraRef

    if (container && renderer && camera) {
      const { clientHeight, clientWidth } = container
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }
  }, [])

  useEffect(() => {
    const { current: container } = containerRef
    let { current: reqId } = reqIdRef

    if (!container) return

    // init scene camera renderer controls
    const { clientHeight, clientWidth } = container

    const scene = new Scene()
    const camera = new PerspectiveCamera(
      60,
      clientWidth / clientHeight,
      0.01,
      1000
    )
    cameraRef.current = camera
    const ambientLight = new AmbientLight(0xcccccc, Math.PI)

    scene.add(ambientLight)
    scene.add(camera)

    const renderer = new WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(clientWidth, clientHeight)
    renderer.outputColorSpace = SRGBColorSpace
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true

    // load gltf
    loadModel(url).then(obj => {
      setContent(obj)
      requestAnimationFrame(animate)
      setLoading(false)
    })

    // set model, camera in center by AABB
    const setContent = object => {
      // AABB
      const box = new Box3().setFromObject(object)
      const size = box.getSize(new Vector3())
      const center = box.getCenter(new Vector3())

      object.position.copy(new Vector3(0, 0, 0))
      // object.position.x += object.position.x - center.x
      // object.position.y += object.position.y - center.y
      // object.position.z += object.position.z - center.z

      controls.reset()

      controls.maxDistance = size.length() * 10
      camera.near = size.length() / 100
      camera.far = size.length() * 100
      camera.updateProjectionMatrix()

      camera.position.copy(center)
      camera.position.x += size.length() * 1
      camera.position.y += size.length() * 1
      camera.position.z += size.length() * 1
      camera.lookAt(center)

      const scale =
        clientHeight === 280 ? clientHeight * 0.01 : clientHeight * 0.003
      object.scale.set(scale, scale, scale)

      controls.saveState()

      scene.add(object)
    }

    // animate
    const animate = () => {
      reqId = requestAnimationFrame(animate)

      renderer.render(scene, camera)

      controls.update()
    }

    // clean
    return () => {
      cancelAnimationFrame(reqId)
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [url])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <Box
      ref={containerRef}
      m="auto"
      mt={['0px', '-40px', '-100px']}
      mb={['-40px', '-140px', '-200px']}
      w={'100%'}
      h={['280px', '480px', '640px']}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size) / 2)"
        />
      )}
    </Box>
  )
}

export default GLTFViewer
