/* eslint-disable @next/next/no-img-element */
export default function Example({ allOperas }: { allOperas: Array<object> }) {
  console.log(allOperas);
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        {allOperas.map((opera: any) => (
          <a key={opera.id} href={opera.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-7">
              <img
                src={opera.image}
                alt="opera-image"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{opera.composer}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {opera.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
