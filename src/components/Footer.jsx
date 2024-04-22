import React from 'react'
import { resourcesLinks,  platformLinks, communityLinks } from '../constants'

function Footer() {
  return (
    <footer className='py-10 mt-20 border-t border-neutral-400'>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
            <div>
                <h3 className='mb-4 font-semibold text-md'>Resources</h3>
                <ul className='space-y-2 '>
                    {
                        resourcesLinks.map((resource, index) => (
                            <li key={index} className=''>
                                <a className='text-neutral-300 hover:text-white' href={resource.href}>{resource.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className='mb-4 font-semibold text-md'>Platoform</h3>
                <ul className='space-y-2 '>
                    {
                        platformLinks.map((resource, index) => (
                            <li key={index} className=''>
                                <a className='text-neutral-300 hover:text-white' href={resource.href}>{resource.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className='mb-4 font-semibold text-md'>Community</h3>
                <ul className='space-y-2 '>
                    {
                        communityLinks.map((resource, index) => (
                            <li key={index} className=''>
                                <a className='text-neutral-300 hover:text-white' href={resource.href}>{resource.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
