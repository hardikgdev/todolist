import { Laptop, Smartphone, Tablet } from 'lucide-react'

export default function DeviceNotSup() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary to-primary-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Device Not Supported</h1>
            <div className="flex justify-center space-x-4 mb-6">
              <Smartphone className="w-12 h-12 text-muted-foreground" />
              <Tablet className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-center text-lg mb-8">
              We're sorry, but this application is currently not supported on phones and tablets.
            </p>
            <div className="flex justify-center items-center space-x-3">
              <Laptop className="w-10 h-10 text-primary" />
              <span className="text-base">Please access the app from a desktop computer.</span>
            </div>
          </div>
        </div>
      </div>
    )
}