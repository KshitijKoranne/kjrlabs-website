import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";
import technologies from "../constants/dummy/technologies.json";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="mb-4" contentWidth={800} initialOffsetX={0}>
      {technologies?.map((tech, index) => (
        <SliderItem width={tech.width} key={index}>
          <div className="flex items-center justify-center h-[50px]">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-10 w-auto object-contain"
            />
          </div>
        </SliderItem>
      ))}
    </SliderContainer>
    <SliderContainer className="" contentWidth={800} initialOffsetX={0}>
      {technologies
        ?.map((tech, index) => (
          <SliderItem width={tech.width} key={index}>
            <div className="flex items-center justify-center h-[50px]">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 w-auto object-contain"
              />
            </div>
          </SliderItem>
        ))
        .reverse()}
    </SliderContainer>
  </>
);

export default ClientLogos;
