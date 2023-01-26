import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Opera from "./shared/Opera";

export default function Operas() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isOperas, setOperas] = useState(null);
  const [isReady, setReady] = useState(false);

  const handleOperas = async () => {
    const res = await fetch("/api/operas");
    const data = await res.json();
    setOperas(data.data);
    setReady(true);
  };

  useEffect(() => {
    handleOperas();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1
              id="operas"
              className="text-4xl font-bold tracking-tight text-gray-900"
            >
              Operas
            </h1>
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              <div className="lg:col-span-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-[45rem] overflow-scroll">
                  {isReady ? (
                    <Opera allOperas={isOperas as any} />
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
