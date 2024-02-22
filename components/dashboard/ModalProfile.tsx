import React from 'react'
import Modal from '../ui/Modal';
import { ImCross } from 'react-icons/im';
import Input, { InputImagePreview } from '../ui/Input';
import Image from "next/image";
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';

type userData = {
  namaLengkap: string;
  tanggalLahir: Date;
  jabatan: string;
  departemen: string;
  lokasi: string;
  email: string;
  alamat: string;
  status: string;
}

export default function ModalProfile({openModal, closeModal, data}: {data?: userData, openModal: boolean, closeModal: () => void}) {
  return (
    <Modal openModal={openModal} closeModal={closeModal}>
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg border">
        <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
          <h2 className="text-xl font-semibold text-gray-600">{data != undefined ? `Ubah Data Karyawan` : `Tambah Karyawan`}</h2>
          <button role="button" onClick={closeModal} className="cursor-pointertext-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"> 
            <ImCross width={20} height={20} />
          </button>
        </div>


        <div className="py-5 px-8">
          <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none mb-4">

              <div className="absolute flex h-32 w-full justify-left rounded-xl bg-cover px-4">
                <Image width={300} height={300} alt='' src='https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg' className="flex h-32 w-full justify-center rounded-xl bg-cover"/>
              </div>

              <InputImagePreview className="flex z-10 mt-10 shadow-sm h-[140px] w-[140px] rounded-xl overflow-hidden border-[4px] border-white bg-blue-400 dark:!border-navy-700"/>
          </div>



          <div className="grid grid-cols-1 gap-3 divide-y">

              <div className="py-2">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Nama Lengkap
                </label>
                <Input id="name" className="mt-2 w-full" placeholder={`Nama Lengkap`} />
              </div>

              <div className="py-2">
                <label htmlFor="tanggalLahir" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Tanggal Lahir
                </label>
                <Input id="tanggalLahir" className="mt-2 w-full" placeholder={`Tanggal Lahir`} />
              </div>

              <div className="py-2">
                <label htmlFor="jabatan" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Jabatan
                </label>
                <Select id='jabatan' placeholder='Jabatan' className='mt-2' data={[
                  {value: "Jabatan 1"},
                  {value: "Jabatan 2"},
                  {value: "Jabatan 3"},
                ]} />
              </div>

              <div className="py-2">
                <label htmlFor="departemen" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Departemen
                </label>
                <Select id='departemen' placeholder='Departemen' className='mt-2' data={[
                  {value: "Departemen 1"},
                  {value: "Departemen 2"},
                  {value: "Departemen 3"},
                ]} />
              </div>

              <div className="py-2">
                <label htmlFor="lokasi" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Lokasi
                </label>
                <Select id='lokasi' placeholder='Lokasi' className='mt-2' data={[
                  {value: "Pusat", status: true},
                  {value: "Curug"},
                  {value: "AMDK"},
                ]} />
              </div>

              <div className="py-2">
                <label htmlFor="noHp" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Nomor Hp
                </label>
                <Input id="noHp" className="mt-2 w-full" placeholder={`Nomor Hp`} />
              </div>

              <div className="py-2">
                <label htmlFor="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Email
                </label>
                <Input id="email" type='email' className="mt-2 w-full" placeholder={`Email`} />
              </div>

              <div className="py-2">
                <label htmlFor="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Alamat
                </label>
                <Textarea id="email" className="mt-2 w-full" placeholder={`Alamat`} />
              </div>

              <div className="py-2">
                <label htmlFor="status" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Status
                </label>
                <Select id='status' placeholder='Status' className='mt-2' data={[
                  {value: "PKWT"},
                  {value: "PKWTT"},
                ]} />
              </div>
          </div>
          
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Simpan </button>
          <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button>
        </div>
      </div>
    </Modal>
  )
}
