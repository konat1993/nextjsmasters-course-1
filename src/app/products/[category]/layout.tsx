import React from 'react';

type Props = {};

const CategoryLayout = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CategoryLayout;
