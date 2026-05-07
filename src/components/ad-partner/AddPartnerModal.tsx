import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function AddPartnerModal({ open, onClose }: any) {
  const [active, setActive] = useState(true)

  return (


    <Dialog open={open} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[470px]">
          <DialogHeader>
              <DialogTitle>Add New Records</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-2">
          {/* Input */}
          <div>
          <label className="text-sm font-medium">
              Ad Partner Name
          </label>
          <Input placeholder="Ad Partner Name" className="mt-1" />
          </div>

          {/* Status */}
          <div>
          <label className="text-sm font-medium">Status</label>
          <div className="flex items-center gap-2 mt-2">
          <Switch
              checked={active}
              onCheckedChange={setActive}
              className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
          />
          <span className="text-sm font-medium">
              {active ? "Active" : "Inactive"}
          </span>
          </div>
          </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 pt-4">
              <Button
                  variant="outline"
                  onClick={onClose}
              >
                  Reset
              </Button>
              {/* <Button variant="outline" onClick={onClose}>Cancel</Button> */}
              <Button className="bg-black text-white">
                  Save
              </Button>
              </div>
          </div>
          </DialogContent>
          </Dialog>











  )
}