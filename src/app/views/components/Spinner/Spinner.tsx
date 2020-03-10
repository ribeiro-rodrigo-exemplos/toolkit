import React from 'react'

import { usePromiseTracker } from "react-promise-tracker"

export default (): any => {
    const { promiseInProgress } = usePromiseTracker() 
    return (
            promiseInProgress && 
            <div
                style={{
                    position: "absolute", 
                    left: "50%", 
                    top: "40%"
                }}>
                <svg width="150" height="150" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#20a8d8" aria-label="audio-loading">
                    <circle cx="15" cy="15" r="11.9215">
                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
                        <animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="60" cy="15" r="12.0785" attributeName="fillOpacity" from="1" to="0.3">
                        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate>
                        <animate attributeName="fillOpacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="105" cy="15" r="11.9215"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
                        <animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
                    </circle>
                </svg>
            </div>
    )
}
