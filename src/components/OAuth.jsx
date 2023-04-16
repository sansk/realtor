import { FcGoogle } from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className="flex justify-center items-center w-full bg-red-600 text-white rounded-md mb-2 font-semibold py-3 hover:bg-red-700 transition duration-200 ease-in-out">
        <FcGoogle className='text-2xl bg-white rounded-full mx-2 p-1'/>
        Continue with Google
    </button>
  )
}
