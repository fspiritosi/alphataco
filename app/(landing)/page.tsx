import { AuthButton } from '@/shared/components/auth-button'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen flex flex-col text-white">
            <nav className="w-full border-b-2 fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold">AlphaTaco</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">Home</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">Menu</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">About</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">Contact</a>
                                <AuthButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="mt-20 w-full max-w-7xl mx-auto px-4 py-8">
                {/* Content Skeletons */}
                <div className="space-y-8">
                    <div className="">
                        <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="">
                                <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
                                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <div className="h-32 bg-gray-700 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page