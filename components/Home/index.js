import React from 'react'

function Home() {
  return (
    <>
      <div className=" home flex bg-[#2dc46a] p-4 gap-5 justify-center items-center w-full flex-col">
        <h1 className="text-center mt-10 text-white text-4xl font-bold">
          Buat CV profesional online anda dengan pembuat CV
        </h1>
        <p className="text-center">Buat CV profesional anda sendiri dan unduh dalam 15 menit</p>
        <button className="py-4 px-8 rounded-md bg-indigo-900 text-lg font-semibold"> Buat CV Anda </button>
        <p className="text-center ">Peluang anda mendapat pekerjaan akan meningkat 15%</p>
      </div>

      <div className="flex  p-4 gap-5 justify-center items-center w-full flex-col">
        <div className="border-2 flex py-6 bg-[#fff] rounded-md px-8 items-center">
          <div className="icon flex items-center mx-5">
            <p className="bg-indigo-500 px-6 py-8 rounded-full text-3xl ">Icon</p>
          </div>
          <div className="px-4 flex flex-col gap-4">
            <p className="text-[#444] text-lg font-semibold">Pembuat CV yang cepat dan mudah</p>
            <p className="text-gray-600">Dengan pembuat CV online kami, siapa saja bisa membuat CV profesional dengan mudah dan cepat. Masukkan detail pribadi Anda dan mulailah mengisi konten CV. Terakhir, pilih satu dari 36 layout CV kami dan unduh CV Anda.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home