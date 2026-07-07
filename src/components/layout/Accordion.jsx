import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { CardList } from './Ui.jsx';

const tones = {
  violet: {
    hover: 'hover:bg-violet-50',
    text: 'text-violet-700',
    border: 'hover:border-violet-200',
  },

  indigo: {
    hover: 'hover:bg-indigo-50',
    text: 'text-indigo-700',
    border: 'hover:border-indigo-200',
  },
};

function Accordion({
  items = [],
  tone = 'violet',
  defaultOpen = 0,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const colors = tones[tone] ?? tones.violet;

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className={`overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ${colors.border}`}
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex(isOpen ? -1 : index)
              }
              className={`flex cursor-pointer w-full items-center justify-between px-6 py-5 text-left transition-colors ${colors.hover}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4">

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-sm font-bold ${colors.text}`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className={`mt-1 text-sm ${colors.text}`}>
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                </div>
              </div>

              <FiChevronDown
                className={`ml-5 text-xl transition-transform duration-300  ${colors.text} ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? 'grid-rows-[1fr]'
                  : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-stone-100 px-6 py-5">

                  {item.items && (
                    <CardList
                      items={item.items}
                      tone={tone}
                    />
                  )}

                  {item.content && (
                    <p className="leading-7 text-stone-600">
                      {item.content}
                    </p>
                  )}

                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default Accordion;