import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function EditPartnerModal({ open, onClose, data }: any) {
  const [name, setName] = useState("")
  const [active, setActive] = useState(true)

  // ✅ Sync data when modal opens / data changes
  useEffect(() => {
    if (data) {
      setName(data.name || "")
      setActive(data.status === "Active")
    }
  }, [data])

  // ✅ Reset when modal closes
  useEffect(() => {
    if (!open) {
      setName("")
      setActive(true)
    }
  }, [open])

  const handleSave = () => {
    const payload = {
      ...data,
      name,
      status: active ? "Active" : "Inactive",
    }

    console.log("Updated Data:", payload)

    // 👉 later replace with API call

    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Edit Partner</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* Name */}
          <div>
            <label className="text-sm font-medium">
              Ad Partner Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
            />
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
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-black text-white" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}