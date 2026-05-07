import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DeletePartnerModal({ open, onClose, data }: any) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
           Are you sure you want to delete this? 
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-500">
          You won't be able to revert this!
        </p>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="destructive">Yes, Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}