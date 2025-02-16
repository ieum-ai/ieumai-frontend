import { LayoutGroup } from 'motion/react';
import { PropsWithChildren } from 'react';

const VoiceTestLayout = ({ children }: PropsWithChildren) => {
  return <LayoutGroup>{children}</LayoutGroup>;
};

export default VoiceTestLayout;
