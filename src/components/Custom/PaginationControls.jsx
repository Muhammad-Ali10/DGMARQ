// components/shop/PaginationControls.jsx
import React from "react";
import { Button } from "@/components/ui/button";

const PaginationControls = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex justify-end items-center gap-4 mt-6">
      <Button
        variant="outline"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
