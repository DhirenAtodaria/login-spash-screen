import React, { useState, useEffect } from "react";
import "./Container.scss";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const Container = () => {
    const [active, setActive] = useState(false);

    const [{ x }, set] = useSpring(() => ({
        x: -500,
    }));

    const bind = useDrag(
        ({ movement: [x], velocity, down, direction: [dx], tap }) => {
            console.log("XX: ", x, down);
            if (!down) {
                if (x > 100) {
                    set({ x: 500 });
                } else if (x < -250) {
                    set({ x: -500 });
                } else {
                    set({ x: 0 });
                }
                return;
            }
            set({ x });
        },
        {
            initial: () => [x.get(), 0],
            bounds: { left: -500, right: 500, top: 0, bottom: 476 },
            rubberband: true,
        }
    );

    return (
        <div className="container" {...bind()}>
            <svg width="256px" height="464px" viewBox="0 0 256 464">
                <animated.path
                    d={x.to({
                        range: [-500, 0, 500],
                        output: [
                            "M 112.1436,58.333351 C 133.33448,55.238318 156.66782,59.762128 172.73891,79.40581 188.81,99.049492 197.61934,133.8107 198.09524,177.38248 198.57114,220.95426 190.71416,273.33416 175.95204,314.04841 161.18992,354.76265 139.52369,383.80968 116.30961,380.59553 93.095538,377.38138 68.33413,341.9059 67.976727,295.95263 67.619324,249.99936 91.666462,193.57192 93.214509,156.31005 94.762555,119.04818 73.810591,100.9533 72.858033,86.547879 71.905475,72.142456 90.952714,61.428385 112.1436,58.333351 Z",
                            "M 111.42931,54.761923 C 139.44055,44.166274 183.44139,47.342006 199.16748,67.262953 215.23857,87.62092 242.61934,136.66784 243.09524,180.23962 243.57115,223.8114 233.5713,305.47702 218.80918,346.19126 204.04706,386.90551 136.02163,426.08522 80.595327,393.45268 41.399856,370.37612 67.619844,332.62019 67.262441,286.66692 66.905038,240.71364 33.095034,212.14335 34.64308,174.88148 36.191126,137.61961 73.200561,145.96333 72.858033,106.54788 72.509148,66.400927 93.414739,61.576189 111.42931,54.761923 Z",
                            "M 103.57217,115.47621 C 132.62315,107.86724 169.11203,120.51026 192.02462,140.83438 214.93721,161.15851 221.05612,181.83728 225.95238,210.95391 230.84865,240.07054 219.99459,267.32807 203.09489,295.47697 186.19519,323.62588 134.86385,329.38836 94.881041,326.30983 54.898231,323.2313 41.055435,299.98631 30.119584,268.80978 19.183732,237.63324 23.391469,227.41453 25.357366,209.88148 27.323262,192.34843 33.897803,182.78803 42.143747,163.69074 50.389691,144.59345 74.521189,123.08518 103.57217,115.47621 Z",
                        ],
                    })}
                    style={{
                        fill: x.to({
                            range: [-500, 0, 500],
                            output: ["#fdeae7", "#d3eacf", "#000000"],
                        }),
                        stroke: "#000000",
                        strokeWidth: x.to({
                            range: [-500, 0, 500],
                            output: [1, 5, 10],
                        }),
                    }}
                />
            </svg>
            {/* <div className="description">
                <animated.div
                    className="description-item1"
                    style={{
                        x: x.to({
                            range: [-500, 0, 500],
                            output: [0, -500, -1000],
                        }),
                    }}
                >
                    Hello
                </animated.div>
                <animated.div
                    className="description-item2"
                    style={{
                        x: x.to({
                            range: [-500, 0, 500],
                            output: [0, -500, -1000],
                        }),
                    }}
                >
                    Lorem First Description
                </animated.div>
                <animated.div
                    className="description-item3"
                    style={{
                        x: x.to({
                            range: [-500, 0, 500],
                            output: [0, -500, -1000],
                        }),
                    }}
                >
                    Some Random Sideways Text
                </animated.div>
            </div> */}
        </div>
    );
};

export default Container;
