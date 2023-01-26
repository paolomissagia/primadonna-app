const features = [
  { name: "origin", description: "italy" },
  { name: "creation", description: "sixteenth century" },
  { name: "format", description: "music, performing and singing" },
  { name: "duration", description: "usually two-three hours" },
  { name: "personalities", description: "pavarotti & maria callas" },
  { name: "roles", description: "tenor, soprano, baritone" },
];

export default function Example() {
  return (
    <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 min-h-screen">
      <div id="about">
        <div className="text-center">
          <div className="w-2/3 mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
              what is opera
            </h2>
            <p className="mt-4 text-gray-500 text-xl">
              friedrich nietzsche once classified opera as the modern
              manifestation of culture as a form of art; but why exactly is this
              so?
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 text-xl">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
