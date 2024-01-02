import Link from "next/link";

interface DropdownProps {
  title: string;
  data: {
    name: string;
    link: string;
  }[];
  open: () => void;
  toggle: boolean;
  color: string;
  fill: string;
}
export const Dropdown = ({ title, data, open, toggle, color, fill }: DropdownProps) => {
  return (
    <div className="relative inline-block text-left">
      <div className="hover:text-mine">
        <button type="button" className={`inline-flex w-full justify-center gap-x-1.5 bg-none border-0 outline-none hover:text-mine text-sm font-semibold ${color}`} id="menu-button" aria-expanded="true" aria-haspopup="true" onMouseOver={open}>
          {title}
          <svg className="-mr-1 h-5 w-5 hover:text-mine" viewBox="0 0 20 20" fill={`${fill}`} aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>


      {toggle === true && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">
          {
            data?.map(({ name, link }, ind) => (
              <Link href={link} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0" key={ind}>{name}</Link>
            ))
          }
        </div>
      </div>}
    </div>

  )
}