
import React from 'react';
const Designform = () => {
    return (
        <div className={`text-white font-bold py-6 px-9 bg-gray-800 rounded-lg col-span-6`}>

            <h1 className="text-2xl font-bold ">指定して変更</h1>

            <div className="py-3">
                <label >IPアドレス</label>
                <input type="text" className="w-full border border-sea rounded py-1 " />
            </div>

            <div className="py-3">
                <label >サブネットマスク</label>
                <input type="text" className="w-full border border-sea rounded py-1 " />
            </div>

            <div className="py-3">
                <label >デフォルトゲートウェイ</label>
                <input type="text" className="w-full border border-sea rounded py-1 " />
            </div>

            <button className="w-full bg-sea text-white py-2 mt-6 mb-3 rounded hover:bg-sea-800 focus:outline-none focus:shadow-outline ">変更</button>

        </div>
    )
}

export default Designform;
