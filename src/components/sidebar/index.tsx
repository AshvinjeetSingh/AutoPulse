'use client'
import { usePathname } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import React from 'react'
import { menuOptions } from '@/lib/constant'
import { Link } from 'lucide-react'
import clsx from 'clsx'

type Props = {}

const SideMenu = (props: Props) => {
    const pathName =usePathname()
  return (
      <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2">
          <div className="flex items-center justify-center flex-col gap-8">
            <link className='flex font-bold flex-row' href="/">AP</link>
              <TooltipProvider>
                {menuOptions.map((item)=>{
                    <ul key={item.name}>
                        <Tooltip>
                            <TooltipTrigger>
                                <li>
                                    <Link
                                        href={menuOptions.href}
                                        className={clsx(
                                            'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                                            {
                                                'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                                                    pathName === menuOptions.href,
                                            }
                                        )}
                                    >
                                        <menuOptions.Component
                                            selected={pathName === menuOptions.href}
                                        />
                                    </Link>
                                </li>
                            </TooltipTrigger>
                            
                        </Tooltip>
                    </ul>
                })}
              </TooltipProvider>
          </div>
    </nav>
    
  )
}

export default SideMenu