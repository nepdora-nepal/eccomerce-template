"use client";

import { Heart, Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface WishlistButtonProps {
    size?: "sm" | "md" | "lg";
    isActive?: boolean;
    isLoading?: boolean;
    onToggle?: (active: boolean) => void;
}

export default function WishlistButton({
    size = "md",
    isActive = false,
    isLoading = false,
    onToggle,
}: WishlistButtonProps) {
    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onToggle && !isLoading) onToggle(!isActive);
    };

    const sizeClasses = {
        sm: "p-1.5",
        md: "p-2",
        lg: "p-2.5",
    };

    const iconSizes = {
        sm: 14,
        md: 18,
        lg: 22,
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            disabled={isLoading}
            className={`${sizeClasses[size]} rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-70 disabled:scale-100 h-auto w-auto ${isActive
                ? "bg-destructive/10 text-destructive hover:bg-destructive/20 hover:text-destructive"
                : "bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-destructive hover:bg-card/90 shadow-sm"
                }`}
        >
            {isLoading ? (
                <Loader2
                    size={iconSizes[size]}
                    className="animate-spin"
                />
            ) : (
                <Heart
                    size={iconSizes[size]}
                    className={isActive ? "fill-current" : ""}
                />
            )}
        </Button>
    );
}
