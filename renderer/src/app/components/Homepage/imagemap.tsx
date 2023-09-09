import React from 'react';
import { useRecoilState } from 'recoil';
import { animationState, messageState1 } from '../../state/AnimationState';

// スタイルを外部で定義
const rectStyle = {
    fill: '#007BFF',
    stroke: '#00274C',
    strokeWidth: '10.0662',
    cursor: 'pointer',
    transition: 'fill 0.3s ease'
};



const ImageMap: React.FC = () => {

    //アニメーションセット
    const [isAnimating, setIsAnimating] = useRecoilState(animationState);
    const [popMessage1, setPopMessage1] = useRecoilState(messageState1);

    const process = async (path: string) => {

        const response = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        setIsAnimating(true);

        const message = data.message;
        setPopMessage1(message);
    };

    return (
        <div className="flex flex-col h-screen bg-sumi-800">
            {/* NOTE : viewBox > care for Div Size */}
            {/* 3840-56(h-14)-80(h-20) = 3716 */}
            <svg width="100%" height="100%" viewBox="0 0 5120 3840" fill="none" xmlns="http://www.w3.org/2000/svg">

                <rect x="2003" y="1961" width="100" height="76" rx="19" transform="rotate(-180 2003 1961)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M2002.51 1890.24C2009.25 1890.71 2015 1885.37 2015 1878.61C2015 1872.2 2009.8 1867 2003.39 1867L1902.61 1867C1896.2 1867 1891 1872.2 1891 1878.61C1891 1885.37 1896.75 1890.71 1903.49 1890.24C1916.34 1889.35 1938.29 1888 1953 1888C1967.71 1888 1989.66 1889.35 2002.51 1890.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1765" y="1916" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1903" y="2219" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1903.49 2289.76C1896.75 2289.29 1891 2294.63 1891 2301.39C1891 2307.8 1896.2 2313 1902.61 2313L2003.39 2313C2009.8 2313 2015 2307.8 2015 2301.39C2015 2294.63 2009.25 2289.29 2002.51 2289.76C1989.66 2290.65 1967.71 2292 1953 2292C1938.29 2292 1916.34 2290.65 1903.49 2289.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="2141" y="2264" width="376" height="172" rx="7" transform="rotate(-180 2141 2264)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="878.716" y="2707.71" width="96.5789" height="73.4" rx="18.35" transform="rotate(90 878.716 2707.71)" fill="#007BFF" stroke="#00274C" strokeWidth="3.86316" />
                <path d="M810.376 2708.18C810.826 2701.67 805.677 2696.12 799.14 2696.12C792.95 2696.12 787.932 2701.14 787.932 2707.33L787.932 2804.67C787.932 2810.86 792.95 2815.88 799.14 2815.88C805.677 2815.88 810.826 2810.33 810.376 2803.82C809.517 2791.4 808.213 2770.21 808.213 2756C808.213 2741.79 809.517 2720.6 810.376 2708.18Z" fill="#007BFF" stroke="#00274C" strokeWidth="3.86316" />
                <rect x="835.255" y="2938.07" width="363.137" height="165.813" rx="6.76053" transform="rotate(-90 835.255 2938.07)" fill="#007BFF" stroke="#00274C" strokeWidth="3.86316" />
                <rect x="1243" y="2620" width="100" height="76" rx="19" transform="rotate(-180 1243 2620)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1242.51 2549.24C1249.25 2549.71 1255 2544.37 1255 2537.61C1255 2531.2 1249.8 2526 1243.39 2526L1142.61 2526C1136.2 2526 1131 2531.2 1131 2537.61C1131 2544.37 1136.75 2549.71 1143.49 2549.24C1156.34 2548.35 1178.29 2547 1193 2547C1207.71 2547 1229.66 2548.35 1242.51 2549.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1005" y="2575" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1623" y="2620" width="100" height="76" rx="19" transform="rotate(-180 1623 2620)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1622.51 2549.24C1629.25 2549.71 1635 2544.37 1635 2537.61C1635 2531.2 1629.8 2526 1623.39 2526L1522.61 2526C1516.2 2526 1511 2531.2 1511 2537.61C1511 2544.37 1516.75 2549.71 1523.49 2549.24C1536.34 2548.35 1558.29 2547 1573 2547C1587.71 2547 1609.66 2548.35 1622.51 2549.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1385" y="2575" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="2003" y="2620" width="100" height="76" rx="19" transform="rotate(-180 2003 2620)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M2002.51 2549.24C2009.25 2549.71 2015 2544.37 2015 2537.61C2015 2531.2 2009.8 2526 2003.39 2526L1902.61 2526C1896.2 2526 1891 2531.2 1891 2537.61C1891 2544.37 1896.75 2549.71 1903.49 2549.24C1916.34 2548.35 1938.29 2547 1953 2547C1967.71 2547 1989.66 2548.35 2002.51 2549.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1765" y="2575" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1903" y="2878" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1903.49 2948.76C1896.75 2948.29 1891 2953.63 1891 2960.39C1891 2966.8 1896.2 2972 1902.61 2972L2003.39 2972C2009.8 2972 2015 2966.8 2015 2960.39C2015 2953.63 2009.25 2948.29 2002.51 2948.76C1989.66 2949.65 1967.71 2951 1953 2951C1938.29 2951 1916.34 2949.65 1903.49 2948.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="2141" y="2923" width="376" height="172" rx="7" transform="rotate(-180 2141 2923)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1523" y="2878" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1523.49 2948.76C1516.75 2948.29 1511 2953.63 1511 2960.39C1511 2966.8 1516.2 2972 1522.61 2972L1623.39 2972C1629.8 2972 1635 2966.8 1635 2960.39C1635 2953.63 1629.25 2948.29 1622.51 2948.76C1609.66 2949.65 1587.71 2951 1573 2951C1558.29 2951 1536.34 2949.65 1523.49 2948.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1761" y="2923" width="376" height="172" rx="7" transform="rotate(-180 1761 2923)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1143" y="2878" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1143.49 2948.76C1136.75 2948.29 1131 2953.63 1131 2960.39C1131 2966.8 1136.2 2972 1142.61 2972L1243.39 2972C1249.8 2972 1255 2966.8 1255 2960.39C1255 2953.63 1249.25 2948.29 1242.51 2948.76C1229.66 2949.65 1207.71 2951 1193 2951C1178.29 2951 1156.34 2949.65 1143.49 2948.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1381" y="2923" width="376" height="172" rx="7" transform="rotate(-180 1381 2923)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1243" y="3279" width="100" height="76" rx="19" transform="rotate(-180 1243 3279)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1242.51 3208.24C1249.25 3208.71 1255 3203.37 1255 3196.61C1255 3190.2 1249.8 3185 1243.39 3185L1142.61 3185C1136.2 3185 1131 3190.2 1131 3196.61C1131 3203.37 1136.75 3208.71 1143.49 3208.24C1156.34 3207.35 1178.29 3206 1193 3206C1207.71 3206 1229.66 3207.35 1242.51 3208.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1005" y="3234" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1623" y="3279" width="100" height="76" rx="19" transform="rotate(-180 1623 3279)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1622.51 3208.24C1629.25 3208.71 1635 3203.37 1635 3196.61C1635 3190.2 1629.8 3185 1623.39 3185L1522.61 3185C1516.2 3185 1511 3190.2 1511 3196.61C1511 3203.37 1516.75 3208.71 1523.49 3208.24C1536.34 3207.35 1558.29 3206 1573 3206C1587.71 3206 1609.66 3207.35 1622.51 3208.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1385" y="3234" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="2003" y="3279" width="100" height="76" rx="19" transform="rotate(-180 2003 3279)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M2002.51 3208.24C2009.25 3208.71 2015 3203.37 2015 3196.61C2015 3190.2 2009.8 3185 2003.39 3185L1902.61 3185C1896.2 3185 1891 3190.2 1891 3196.61C1891 3203.37 1896.75 3208.71 1903.49 3208.24C1916.34 3207.35 1938.29 3206 1953 3206C1967.71 3206 1989.66 3207.35 2002.51 3208.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1765" y="3234" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1903" y="3537" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1903.49 3607.76C1896.75 3607.29 1891 3612.63 1891 3619.39C1891 3625.8 1896.2 3631 1902.61 3631L2003.39 3631C2009.8 3631 2015 3625.8 2015 3619.39C2015 3612.63 2009.25 3607.29 2002.51 3607.76C1989.66 3608.65 1967.71 3610 1953 3610C1938.29 3610 1916.34 3608.65 1903.49 3607.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="2141" y="3582" width="376" height="172" rx="7" transform="rotate(-180 2141 3582)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1523" y="3537" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1523.49 3607.76C1516.75 3607.29 1511 3612.63 1511 3619.39C1511 3625.8 1516.2 3631 1522.61 3631L1623.39 3631C1629.8 3631 1635 3625.8 1635 3619.39C1635 3612.63 1629.25 3607.29 1622.51 3607.76C1609.66 3608.65 1587.71 3610 1573 3610C1558.29 3610 1536.34 3608.65 1523.49 3607.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1761" y="3582" width="376" height="172" rx="7" transform="rotate(-180 1761 3582)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1143" y="3537" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1143.49 3607.76C1136.75 3607.29 1131 3612.63 1131 3619.39C1131 3625.8 1136.2 3631 1142.61 3631L1243.39 3631C1249.8 3631 1255 3625.8 1255 3619.39C1255 3612.63 1249.25 3607.29 1242.51 3607.76C1229.66 3608.65 1207.71 3610 1193 3610C1178.29 3610 1156.34 3608.65 1143.49 3607.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1381" y="3582" width="376" height="172" rx="7" transform="rotate(-180 1381 3582)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="863" y="3279" width="100" height="76" rx="19" transform="rotate(-180 863 3279)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M862.51 3208.24C869.25 3208.71 875 3203.37 875 3196.61C875 3190.2 869.804 3185 863.394 3185L762.606 3185C756.196 3185 751 3190.2 751 3196.61C751 3203.37 756.75 3208.71 763.49 3208.24C776.341 3207.35 798.292 3206 813 3206C827.708 3206 849.659 3207.35 862.51 3208.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="625" y="3234" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="878.716" y="2048.71" width="96.5789" height="73.4" rx="18.35" transform="rotate(90 878.716 2048.71)" fill="#007BFF" stroke="#00274C" strokeWidth="3.86316" />
                <path d="M810.376 2049.18C810.826 2042.67 805.677 2037.12 799.14 2037.12C792.95 2037.12 787.932 2042.14 787.932 2048.33L787.932 2145.67C787.932 2151.86 792.95 2156.88 799.14 2156.88C805.677 2156.88 810.826 2151.33 810.376 2144.82C809.517 2132.4 808.213 2111.21 808.213 2097C808.213 2082.79 809.517 2061.6 810.376 2049.18Z" fill="#007BFF" stroke="#00274C" strokeWidth="3.86316" />
                <rect x="835.255" y="2279.07" width="363.137" height="165.813" rx="6.76053" transform="rotate(-90 835.255 2279.07)" fill="#007BFF" stroke="#00274C" strokeWidth="3.86316" />
                <rect x="1243" y="1961" width="100" height="76" rx="19" transform="rotate(-180 1243 1961)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1242.51 1890.24C1249.25 1890.71 1255 1885.37 1255 1878.61C1255 1872.2 1249.8 1867 1243.39 1867L1142.61 1867C1136.2 1867 1131 1872.2 1131 1878.61C1131 1885.37 1136.75 1890.71 1143.49 1890.24C1156.34 1889.35 1178.29 1888 1193 1888C1207.71 1888 1229.66 1889.35 1242.51 1890.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1005" y="1916" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1623" y="1961" width="100" height="76" rx="19" transform="rotate(-180 1623 1961)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1622.51 1890.24C1629.25 1890.71 1635 1885.37 1635 1878.61C1635 1872.2 1629.8 1867 1623.39 1867L1522.61 1867C1516.2 1867 1511 1872.2 1511 1878.61C1511 1885.37 1516.75 1890.71 1523.49 1890.24C1536.34 1889.35 1558.29 1888 1573 1888C1587.71 1888 1609.66 1889.35 1622.51 1890.24Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1385" y="1916" width="376" height="172" rx="7" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1523" y="2219" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1523.49 2289.76C1516.75 2289.29 1511 2294.63 1511 2301.39C1511 2307.8 1516.2 2313 1522.61 2313L1623.39 2313C1629.8 2313 1635 2307.8 1635 2301.39C1635 2294.63 1629.25 2289.29 1622.51 2289.76C1609.66 2290.65 1587.71 2292 1573 2292C1558.29 2292 1536.34 2290.65 1523.49 2289.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1761" y="2264" width="376" height="172" rx="7" transform="rotate(-180 1761 2264)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1143" y="2219" width="100" height="76" rx="19" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <path d="M1143.49 2289.76C1136.75 2289.29 1131 2294.63 1131 2301.39C1131 2307.8 1136.2 2313 1142.61 2313L1243.39 2313C1249.8 2313 1255 2307.8 1255 2301.39C1255 2294.63 1249.25 2289.29 1242.51 2289.76C1229.66 2290.65 1207.71 2292 1193 2292C1178.29 2292 1156.34 2290.65 1143.49 2289.76Z" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect x="1381" y="2264" width="376" height="172" rx="7" transform="rotate(-180 1381 2264)" fill="#007BFF" stroke="#00274C" strokeWidth="4" />
                <rect
                    onClick={() => process("/api/conf1")}
                    id="office"
                    x="465"
                    y="1736"
                    width="1919"
                    height="2031"
                    rx="30.1987"

                    style={{
                        fill: 'rgba(65 ,65 ,67, 0.01)',
                        cursor: 'pointer',
                        transition: 'fill 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.fill = 'rgba(37, 157, 99, 0.3)'}
                    onMouseOut={(e) => e.currentTarget.style.fill = 'rgba(65 ,65 ,67, 0.01)'}
                />
                <rect
                    onClick={() => process("/api/conf1")}
                    id="conferenceRoom1"
                    x="2068.03"
                    y="220.033"
                    width="829.934"
                    height="829.934"
                    rx="25.1656"
                    style={rectStyle}
                    onMouseOver={(e) => e.currentTarget.style.fill = '#259D63'}
                    onMouseOut={(e) => e.currentTarget.style.fill = '#007BFF'}
                />
                <rect
                    onClick={() => process("/api/conf2")}
                    id="conferenceRoom2"
                    x="2908.03"
                    y="220.033"
                    width="829.934"
                    height="829.934"
                    rx="25.1656"
                    style={rectStyle}
                    onMouseOver={(e) => e.currentTarget.style.fill = '#259D63'}
                    onMouseOut={(e) => e.currentTarget.style.fill = '#007BFF'}
                />
                <rect
                    onClick={() => process("/api/conf3")}
                    id="conferenceRoom3"
                    x="3748.03"
                    y="220.033"
                    width="829.934"
                    height="829.934"
                    rx="25.1656"
                    style={rectStyle}
                    onMouseOver={(e) => e.currentTarget.style.fill = '#259D63'}
                    onMouseOut={(e) => e.currentTarget.style.fill = '#007BFF'}
                />
            </svg>

        </div>
    );
};

export default ImageMap;
