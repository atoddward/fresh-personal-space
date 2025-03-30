
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  isLast?: boolean;
  children?: ReactNode;
}

export const TimelineItem = ({
  title,
  subtitle,
  date,
  isLast = false,
  children,
}: TimelineItemProps) => {
  return (
    <div className="relative slide-up">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 left-4 bottom-0 w-0.5 bg-muted-foreground/20"></div>
      )}
      
      <div className="relative flex gap-x-6">
        {/* Timeline dot */}
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary/10 z-10">
          <div className="h-3 w-3 rounded-full bg-primary"></div>
        </div>
        
        <div className="flex-1 pb-12">
          <div className="flex flex-wrap justify-between gap-x-4 mb-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <p className="mb-3 text-muted-foreground">{subtitle}</p>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => {
  return <div className={cn("mt-8", className)}>{children}</div>;
};
