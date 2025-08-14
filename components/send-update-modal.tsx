"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Eye, CheckCircle, ArrowRight, ArrowLeft, Send } from "lucide-react"

interface SendUpdateModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  incidentTitle?: string
  incidentId?: string
}

type Channel = "slack" | "email"
type Step = 1 | 2 | 3 | 4

interface Recipient {
  id: string
  name: string
  type: "channel" | "user" | "group"
  description?: string
}

export function SendUpdateModal({ open, onOpenChange, incidentTitle, incidentId }: SendUpdateModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null)
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])
  const [customMessage, setCustomMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const slackRecipients: Recipient[] = [
    { id: "eng", name: "#engineering", type: "channel", description: "Main engineering team channel" },
    { id: "devops", name: "#devops", type: "channel", description: "DevOps and infrastructure team" },
    { id: "incidents", name: "#incidents", type: "channel", description: "Incident response channel" },
    { id: "leadership", name: "@leadership", type: "group", description: "Engineering leadership team" },
    { id: "oncall", name: "@on-call", type: "group", description: "Current on-call engineers" },
  ]

  const emailRecipients: Recipient[] = [
    { id: "stakeholders", name: "Stakeholders", type: "group", description: "Project stakeholders and PMs" },
    { id: "customers", name: "Customer Support", type: "group", description: "Customer support team" },
    { id: "executives", name: "Executive Team", type: "group", description: "C-level executives" },
    { id: "engineering", name: "Engineering Team", type: "group", description: "All engineering team members" },
  ]

  const getDefaultMessage = () => {
    return `Incident Update: ${incidentTitle || "Database Connection Timeout"}

Status: Currently investigating
Impact: Payment processing experiencing 2-3 minute delays
Affected Users: ~1,200 users
ETA: 30 minutes

We are actively working to resolve this issue and will provide updates as we make progress.

For questions, please contact the incident response team.`
  }

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel)
    setSelectedRecipients([])
    setCustomMessage(getDefaultMessage())
  }

  const handleRecipientToggle = (recipientId: string) => {
    setSelectedRecipients((prev) =>
      prev.includes(recipientId) ? prev.filter((id) => id !== recipientId) : [...prev, recipientId],
    )
  }

  const handleSendUpdate = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setCurrentStep(4)
  }

  const handleClose = () => {
    setCurrentStep(1)
    setSelectedChannel(null)
    setSelectedRecipients([])
    setCustomMessage("")
    onOpenChange(false)
  }

  const getCurrentRecipients = () => {
    return selectedChannel === "slack" ? slackRecipients : emailRecipients
  }

  const getSelectedRecipientNames = () => {
    const recipients = getCurrentRecipients()
    return selectedRecipients.map((id) => recipients.find((r) => r.id === id)?.name).filter(Boolean)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Send className="w-5 h-5 text-emerald-600" />
            <span>Send Incident Update</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-0.5 mx-2 ${step < currentStep ? "bg-emerald-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select Communication Channel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  className={`cursor-pointer transition-all ${
                    selectedChannel === "slack" ? "ring-2 ring-emerald-600 bg-emerald-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleChannelSelect("slack")}
                >
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Slack</h4>
                    <p className="text-sm text-gray-600">Send updates to Slack channels and groups</p>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all ${
                    selectedChannel === "email" ? "ring-2 ring-emerald-600 bg-emerald-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleChannelSelect("email")}
                >
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-sm text-gray-600">Send updates via email to teams and stakeholders</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select Recipients</h3>
              <p className="text-sm text-gray-600">Choose who should receive this {selectedChannel} update</p>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {getCurrentRecipients().map((recipient) => (
                  <div key={recipient.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      id={recipient.id}
                      checked={selectedRecipients.includes(recipient.id)}
                      onCheckedChange={() => handleRecipientToggle(recipient.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor={recipient.id} className="font-medium cursor-pointer">
                          {recipient.name}
                        </Label>
                        <Badge variant="outline" className="text-xs">
                          {recipient.type}
                        </Badge>
                      </div>
                      {recipient.description && <p className="text-sm text-gray-600 mt-1">{recipient.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Preview & Customize Message</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="recipients" className="text-sm font-medium">
                    Recipients ({selectedRecipients.length})
                  </Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getSelectedRecipientNames().map((name) => (
                      <Badge key={name} variant="secondary">
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message Content
                  </Label>
                  <Textarea
                    id="message"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    rows={8}
                    className="mt-2"
                    placeholder="Enter your update message..."
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium">Preview</span>
                  </div>
                  <div className="text-sm text-gray-700 whitespace-pre-wrap bg-white p-3 rounded border">
                    {customMessage}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center space-y-4 py-8">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-semibold text-emerald-600">Update Sent Successfully!</h3>
              <p className="text-gray-600">
                Your incident update has been sent to {selectedRecipients.length} recipient(s) via {selectedChannel}.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {getSelectedRecipientNames().map((name) => (
                  <Badge key={name} className="bg-emerald-100 text-emerald-800">
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => (currentStep > 1 ? setCurrentStep((prev) => (prev - 1) as Step) : handleClose())}
              disabled={isLoading}
            >
              {currentStep === 1 ? (
                "Cancel"
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </>
              )}
            </Button>

            {currentStep < 4 && (
              <Button
                onClick={() => {
                  if (currentStep === 3) {
                    handleSendUpdate()
                  } else {
                    setCurrentStep((prev) => (prev + 1) as Step)
                  }
                }}
                disabled={
                  (currentStep === 1 && !selectedChannel) ||
                  (currentStep === 2 && selectedRecipients.length === 0) ||
                  (currentStep === 3 && !customMessage.trim()) ||
                  isLoading
                }
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {isLoading ? (
                  "Sending..."
                ) : currentStep === 3 ? (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Update
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}

            {currentStep === 4 && (
              <Button onClick={handleClose} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Done
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
