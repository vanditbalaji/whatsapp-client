import Image from 'next/image'
import React from 'react'
import img from "../../public/whatsapp.gif"
const Empty = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-panel-header-background w-full h-screen border-conversation-border border-1 border-b-4 border-b-icon-green empty-border">
        <Image src={img} height={300} width={300} alt="Empty"/>
      </div>
    </div>
  );
}

export default Empty
