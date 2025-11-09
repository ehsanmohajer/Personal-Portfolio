import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
    const [active, setActive] = useState('#hero');
    return (
        <>
            <Sheet>
                <SheetTrigger asChild >
                    <Button 
                        variant='ghost'
                        size='icon'
                        className="fixed top-4 m-4 right-4 z-50 border-2 hover:border-primary bg-natural-800 py-5 px-5 cursor-pointer hover:text-primary">
                        <MenuIcon size={30}/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-84  bg-neutral-900 text-white py-6 pl-10">
                    <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a 
                                    key={link.label}
                                    href={link.link}
                                    onClick={() => setActive(link.link)}
                                    className={cn('text-neutral-300 hover:text-primary flex items-center gap-2 transition-colors duration-200 text-base', active === link.link && 'text-primary',

                                    )}
                                    >
                                    <Icon className='size-4'/> {link.label}
                                </a>
                            ) 
                        })}
                    </nav>
                    <div className="mt-30">
                        <p className="pb-2">Socials</p>
                        <div className="flex gap-3 text-neutral-500">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={i} 
                                        href={socialLinks.links}
                                        className="hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition-colors duration-500"
                                        > 
                                        <Icon className="size-5 hover:text-primary transition-colors duration-200"/>
                                    </a>
                                )    
                            })}
                        </div>
                    </div>
                </SheetContent>   
            </Sheet>
        </>
    );
};