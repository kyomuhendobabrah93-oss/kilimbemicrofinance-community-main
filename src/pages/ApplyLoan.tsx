import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const ApplyLoan = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We have received your loan application and will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-6 bg-muted/30">
        <div className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-sm p-8 mt-8 mb-16">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-heading font-bold text-foreground">Apply for a Loan</h1>
            <p className="text-muted-foreground mt-2">Fill out the form below and our team will get back to you with the next steps.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+256 000 000000" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Requested Loan Amount (UGX)</Label>
              <Input id="amount" type="number" placeholder="500,000" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Loan Purpose</Label>
              <Textarea id="purpose" placeholder="Briefly describe what you need the loan for..." required className="min-h-[100px]" />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold py-6 text-lg rounded-xl">
              Submit Application
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyLoan;
