import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import ReactNoSSR from 'react-no-ssr';

const VolumetricPlayer = dynamic(() => import('../components/VolumetricPlayer'), { ssr: false })

export default () => {
    return (
        <Fragment>
            <section className="volumetric__wrapper" >
              <ReactNoSSR>
                <VolumetricPlayer style={{ width: '100%', height: '100%' }} meshFilePath={"/liamlow.drcs"} videoFilePath={"/liam_low.mp4"} />
              </ReactNoSSR>
            </section>
        </Fragment>
    )
}
