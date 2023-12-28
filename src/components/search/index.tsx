import { Modal } from '@mantine/core';
import { SearchNormal1 } from 'iconsax-react';
import { useDisclosure } from '@mantine/hooks';

export function Search({colors}: {colors:string}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title=""
        centered
        className='cursor-crosshair caret-white'
        size={"lg"}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.9,
        }}>

        <form className='w-full h-full'>
          <div className="flex">
            <div className="relativ w-full h-full">
              <input type="search" id="" className="block top-0 p-2.5 h w-full border-0 z-20 text-sm text-gray-900 bg-gra-50 border-s-gray-50 outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Search courses..." required />
              <button type="submit" className="absolute top-0 end-0 p-5 text-sm font-medium h-full text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <SearchNormal1 size="20" color={'white'} className='cursor-pointer' />
              </button>
            </div>
          </div>
        </form>

      </Modal>
      <SearchNormal1 size="20" color={colors} onClick={open} className='cursor-pointer' />
    </>
  );
}