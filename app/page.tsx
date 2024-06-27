import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <h3 className="text-3xl font-bold">Overview</h3>
      <h4 className="text-base font-normal">Hello Caleb, welcome back!</h4>
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>hola!</CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>hola!</CardContent>
        </Card>
      </div>
    </>
  );
}
