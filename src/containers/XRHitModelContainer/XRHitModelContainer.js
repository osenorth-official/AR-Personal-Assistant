import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "../../components/XRHitModel/XRHitModel";
import "./XRHitModelContainer.module.css";

const XrHitModelContainer = ({ modelName }) => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <XR>
          <XrHitModel modelName={modelName} />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
