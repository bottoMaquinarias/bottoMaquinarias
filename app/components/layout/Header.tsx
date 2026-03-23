'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    const useDarkNavText = pathname === '/contacto' && !isScrolled

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 box-border ${isScrolled ? 'bg-dark-gray' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className={`text-2xl font-heading ${useDarkNavText ? 'text-dark-gray' : 'text-white'}`}>
                    {/* Logo animado */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: isScrolled || pathname === '/contacto' ? 1 : 0,
                            scale: isScrolled || pathname === '/contacto' ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* <Image src="/logo-nuevo-removebg-preview.png" alt="Logo Botto Maquinarias" width={250} height={250} className="object-contain" /> */}
                        <Image src="/logo_2_1.png" alt="Logo Botto Maquinarias" width={250} height={250} className="object-contain" />
                    </motion.div>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <NavLink href="/" useDarkText={useDarkNavText}>Inicio</NavLink>
                    <NavLink href="/nosotros" useDarkText={useDarkNavText}>Nosotros</NavLink>
                    <NavLink href="/productos" useDarkText={useDarkNavText}>Productos</NavLink>
                    <NavLink href="/contacto" useDarkText={useDarkNavText}>Contacto</NavLink>
                </div>
                <button className={`md:hidden ${useDarkNavText ? 'text-dark-gray' : 'text-white'}`} onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-dark-gray">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <NavLink href="/" onClick={toggleMenu} useDarkText={false}>Inicio</NavLink>
                        <NavLink href="/nosotros" onClick={toggleMenu} useDarkText={false}>Nosotros</NavLink>
                        <NavLink href="/productos" onClick={toggleMenu} useDarkText={false}>Productos</NavLink>
                        <NavLink href="/contacto" onClick={toggleMenu} useDarkText={false}>Contacto</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children, onClick, useDarkText }: { href: string; children: React.ReactNode; onClick?: () => void; useDarkText: boolean }) {
    return (
        <Button asChild
            variant="ghost"
        >
            <Link
                href={href}
                className={`transition duration-300 font-heading ${useDarkText ? 'text-dark-gray' : 'text-white'}`}
                onClick={onClick}
            >
                {children}
            </Link>
        </Button>
    )
}
