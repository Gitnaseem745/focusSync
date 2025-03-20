"use client"

/**
 * Reusable slider component for horizontal scrolling content
 * Supports touch/mouse drag and snap scrolling
 */
import React, { useRef, useState, useEffect } from "react"

interface SliderProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  showArrows?: boolean
  firstItemLarge?: boolean
  snapAlign?: "start" | "center"
}

export function Slider({
  children,
  className = "",
  itemClassName = "",
  showArrows = true,
  firstItemLarge = false,
  snapAlign = "center",
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Check if we need to show navigation arrows
  const checkArrows = () => {
    if (!sliderRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setShowLeftArrow(scrollLeft > 20)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", checkArrows)
      checkArrows()

      return () => {
        slider.removeEventListener("scroll", checkArrows)
      }
    }
  }, [])

  // Handle mouse/touch events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return

    const { clientWidth } = sliderRef.current
    const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2

    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  // Apply special styling to children if firstItemLarge is true
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const childElement = child as React.ReactElement<{ className?: string }>;
      
      return React.cloneElement(childElement, {
        className: `${childElement.props.className || ""} ${itemClassName} ${
          firstItemLarge && index === 0 ? "scale-100" : firstItemLarge ? "scale-85" : ""
        }`.trim(),
      });
    }
    return child;
  });
  

  return (
    <div className="relative group">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className={`
          flex overflow-x-auto scrollbar-hide snap-mandatory
          ${snapAlign === "center" ? "snap-x snap-center" : "snap-x snap-start"}
          ${className}
        `}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {childrenWithProps}
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md opacity-70 hover:opacity-100 transition-opacity z-10"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md opacity-70 hover:opacity-100 transition-opacity z-10"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </>
      )}

      {/* Gradient indicators to show there's more content */}
      {/* {showLeftArrow && (
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
      )}
      {showRightArrow && (
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
      )} */}
    </div>
  )
}

// Helper component to create consistent slider items
export function SliderItem({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`flex-shrink-0 snap-center ${className}`}>{children}</div>
}
