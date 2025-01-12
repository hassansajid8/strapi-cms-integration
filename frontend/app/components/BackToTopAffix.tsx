import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function BackToTopAffix() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            ><IconArrowUp size={16} /></Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default BackToTopAffix