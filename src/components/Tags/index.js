import { cn } from '../../utils/cn';

function Index({ children, className }) {
  const tagClasses = 'px-3 py-1 text-xs rounded-full bg-bubble text-green';

  return <div className={cn(tagClasses, className)}>{children}</div>;
}

export default Index;
