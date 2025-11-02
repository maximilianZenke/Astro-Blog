import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Tags', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="relative" style={{ backgroundColor: "#D9D9D9" }}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo links */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-black font-bold text-5xl">
                            ⚡
                            Astro
                            <span style={{ color: "#F6790C" }}>/</span>
                            Blog
                        </h1>
                    </div>
                    {/* Mobile menu button rechts */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-black focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Desktop Navigation rechts */}
                    <div className="hidden sm:flex sm:space-x-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-white/5 hover:text-black',
                                    'rounded-md px-3 py-2 text-3xl font-medium'
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu rechts */}
            <DisclosurePanel className="sm:hidden absolute right-0 top-16 w-48 bg-gray-200 shadow-lg rounded-md">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-black' : 'text-gray-800 hover:bg-white/5 hover:text-black',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
