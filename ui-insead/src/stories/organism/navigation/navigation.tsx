import { useState } from 'react';

type NavigationItem = {
  label: string;
  url: string;
  hasAccess?: boolean;
  icon?: string | null;
  children?: Array<NavigationItem> | null;
};

type NavigationProps = {
  item: Array<NavigationItem>;
  activeLabel?: string;
  width: 'Full' | 'Half';
};

export const Navigation = ({ item, activeLabel, width }: NavigationProps) => {
  const [active, setActive] = useState(activeLabel);
  const handleParentClick = (label: string) => {
    setActive((prev) => {
      return label === prev ? '' : label;
    });
  };
  return (
    <div className={`${width === 'Full' ? 'w-full' : 'w-1/2'} bg-green-600 rounded-lg p-3`}>
      {item.map(({ label, children, hasAccess = true }) => {
        return (
          <>
            {hasAccess ? (
              <>
                <div
                  onClick={() => handleParentClick(label)}
                  className={`cursor-pointer p-2.5  ${activeLabel === label ? 'bg-orange-400' : ''} text-white hover:bg-orange-500 text-sm mb-3`}
                >
                  {label}
                </div>
                {children && children.length > 0 ? (
                  <div className={`pl-4 ${active === label ? 'block' : 'hidden'}`}>
                    {children.map((child: NavigationItem) => (
                      <div className={'cursor-pointer p-2.5 hover:bg-orange-500 text-white text-sm mb-3'}>
                        {child.label}
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            ) : null}
          </>
        );
      })}
    </div>
  );
};
