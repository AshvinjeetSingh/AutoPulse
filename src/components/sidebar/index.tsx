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
import Link from 'next/link'
import clsx from 'clsx'
import { ModeToggle } from '../Global/mode-toggle'
import { Separator } from '@radix-ui/react-dropdown-menu'

type Props = {}

const SideMenu = (props: Props) => {
    const pathName = usePathname()
    return (
        <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}>
                            {/* {console.log("Menu", pathName, menuItem.href, pathName === menuItem.href)} */}
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href={menuItem.href}
                                            className={clsx(
                                                'group h-8 w-8 flex items-center justify-center  scale-[1] rounded-lg p-[3px] ',
                                                {
                                                    'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                                                        pathName === menuItem.href,
                                                }
                                            )}
                                        >
                                            <menuItem.Component
                                                selected={pathName === menuItem.href}
                                                // href={menuItem.href}
                                            />
                                            
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="right"
                                    className="bg-black/10 backdrop-blur-xl"
                                >
                                    <p>{menuItem.name}</p>
                                    {/* {console.log("MENU",menuItem.name)} */}
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
                <Separator />
                <div className="flex items-center justify-center flex-col gap-8">
                    <ModeToggle />
                </div>
            </div>
        </nav>

    )
}

export default SideMenu