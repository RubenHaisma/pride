import { cn } from '@/lib/utils';

export function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={cn('grid gap-4', props.className)}>
      {props.children}
    </ul>
  );
}