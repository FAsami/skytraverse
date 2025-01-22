const LoadingSkeleton = () => {
  return (
    <div className="max-w-screen-xl px-3 mx-auto overflow-hidden">
      <div className="shadow-sm justify-between rounded-b-md overflow-hidden h-[var(--top-filter-height)] flex sticky top-0 py-4 px-4 flex-wrap w-full bg-white mb-2 border-t z-50 items-center gap-6">
        <div className="min-w-56 h-[calc(100%-2px)]">
          <div className="h-2/3 bg-neutral-200 animate-pulse rounded mb-2"></div>
          <div className="h-1/3 bg-neutral-200 animate-pulse rounded"></div>
        </div>
        <div className="min-w-64 bg-neutral-200 animate-pulse h-[calc(100%-2px)] rounded"></div>
        <div className="flex gap-4">
          <div className="animate-pulse h-8 bg-neutral-200 w-12 rounded"></div>
          <div className="animate-pulse h-8 bg-neutral-200 w-12 rounded"></div>
        </div>
      </div>
      <div className="w-full flex gap-4 mb-6">
        <div className="w-1/3 p-2 overflow-hidden space-y-2 bg-white shadow-sm transition-shadow rounded-md h-[calc(100vh-var(--header-height)-var(--top-filter-height)-1rem)] animate-pulse">
          <div className="animate-pulse h-28 bg-neutral-200 w-full rounded"></div>
          <div className="animate-pulse h-28 bg-neutral-200 w-full rounded"></div>
          <div className="animate-pulse h-28 bg-neutral-200 w-full rounded"></div>
          <div className="animate-pulse h-28 bg-neutral-200 w-full rounded"></div>
          <div className="animate-pulse h-28 bg-neutral-200 w-full rounded"></div>
        </div>
        <div className="w-2/3 rounded-md p-3 h-[calc(100vh-var(--header-height)-var(--top-filter-height)-1rem)] overflow-y-auto scrollbar-light bg-white animate-pulse">
          <div className="rounded  space-y-2 h-full overflow-hidden">
            <div className="animate-pulse h-48 bg-neutral-200 w-full rounded"></div>
            <div className="animate-pulse h-48 bg-neutral-200 w-full rounded"></div>
            <div className="animate-pulse h-48 bg-neutral-200 w-full rounded"></div>
            <div className="animate-pulse h-48 bg-neutral-200 w-full rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeleton
