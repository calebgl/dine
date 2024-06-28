"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
} from "recharts";
import { Progress } from "@/components/ui/progress";

const formatter = new Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
});
function money(amount: number): string {
  return formatter.format(amount);
}

const data = [
  { name: "09:00 am", last: 4000, current: 2400, amt: 2400 },
  { name: "12:00 pm", last: 3000, current: 1398, amt: 2210 },
  { name: "03:00 pm", last: 2000, current: 9800, amt: 2290 },
  { name: "06:00 pm", last: 2780, current: 3908, amt: 2000 },
  { name: "09:00 pm", last: 1890, current: 4800, amt: 2181 },
  { name: "12:00 am", last: 2390, current: 3800, amt: 2500 },
];

const dishes = [
  { id: 1, name: "Pad Thai", orders: 125, category: "Asian" },
  { id: 2, name: "Chocolate Cake", orders: 78, category: "Dessert" },
  { id: 3, name: "Margherita Pizza", orders: 220, category: "Italian" },
  { id: 4, name: "Greek Salad", orders: 112, category: "Salad" },
];

const employees = [
  { id: 5, name: "Michael Jones", job: "Manager", earnings: 85000 },
  { id: 6, name: "Sarah Lee", job: "Waiter", earnings: 120000 },
  { id: 7, name: "David Miller", job: "Marketing Director", earnings: 98000 },
  { id: 8, name: "Emily Garcia", job: "Graphic Designer", earnings: 72000 },
];

export default function Home() {
  return (
    <section className="grid grid-cols-4 grid-rows-4 gap-8">
      <Card className="col-span-2 row-span-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Daily Sales</CardTitle>
          <Button>View Report</Button>
        </CardHeader>
        <CardContent className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                left: 5,
                right: 5,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ dy: 20 }} />
              <Tooltip formatter={money} />
              <Line
                dataKey="current"
                stroke="black"
                strokeWidth={4}
                activeDot={{ r: 6 }}
              />
              <Line dataKey="last" stroke="gray" strokeWidth={4} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-rows-subgrid grid-cols-subgrid col-span-2 row-span-2">
        <Card className="row-span-2">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Total Income</CardTitle>
            <Select defaultValue="today">
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Today" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="h-96">
            <MyPieChart />
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1">
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">573</div>
            <Progress value={40}/>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1">
          <CardHeader>
            <CardTitle>New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,312</div>
            <Progress value={70}/>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-2 row-span-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Trending Dishes</CardTitle>
          <Select defaultValue="today">
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dishes</TableHead>
                <TableHead className="text-right">Orders</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dishes.map((dish) => (
                <TableRow key={dish.id}>
                  <TableCell className="font-medium">{dish.name}</TableCell>
                  <TableCell className="text-right">{dish.orders}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="col-span-2 row-span-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Best Employees</CardTitle>
          <Select defaultValue="today">
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employees</TableHead>
                <TableHead className="text-right">Earnings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">
                    <p>{employee.name}</p>
                    <p>{employee.job}</p>
                  </TableCell>
                  <TableCell className="text-right">
                    {money(employee.earnings)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}

const dataPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const ActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function MyPieChart() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  function onPieEnter(_: any, index: number) {
    setActiveIndex(index);
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={ActiveShape}
          data={dataPie}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
