import React from "react";
import { Card } from "antd";

interface Props {
  title: string;
  description: string;
  key:number|string
}

const ReportCard = ({ title, description,key}: Props) => (
  <Card hoverable key={key} style={{ width: 350 }} className="flex flex-col h-[200px] mb-8 cursor-pointer">
    <h1 className=" px-0.5 font-bold text-lg underline" >{title}</h1>
    <p className="w-full px-1 text-base">{description}</p>
  </Card>
);

export default ReportCard;
