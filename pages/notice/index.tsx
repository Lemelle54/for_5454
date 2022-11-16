import Image from "next/image";

export default function reservePage() {
  return (
    <div className="container mx-auto justify-center">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          공지사항
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/images/notice.jpg" width={800} height={1000} />
      </div>
    </div>
  );
}
