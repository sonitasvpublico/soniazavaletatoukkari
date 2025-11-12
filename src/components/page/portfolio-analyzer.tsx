"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { analyzePortfolio } from "@/ai/flows/ai-powered-portfolio-analyzer";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, WandSparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  portfolioText: z.string().min(50, "Please enter at least 50 characters to analyze.").max(5000, "Please enter no more than 5000 characters."),
});

export default function PortfolioAnalyzer() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioText: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzePortfolio(values);
      setAnalysis(result.suggestions);
    } catch (error) {
      console.error("Error analyzing portfolio:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "There was an error analyzing your portfolio. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <section className="w-full max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center items-center">
          <WandSparkles className="h-10 w-10 text-primary mb-2" />
          <CardTitle className="font-headline text-3xl md:text-4xl">
            AI Portfolio Analyzer
          </CardTitle>
          <CardDescription className="max-w-2xl">
            Paste your portfolio description, bio, or any text to get AI-powered suggestions for improvement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="portfolioText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your Portfolio Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A passionate UX/UI designer with a knack for creating intuitive and beautiful digital experiences..."
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit" disabled={isLoading} size="lg">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze My Portfolio"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        {analysis && (
          <CardFooter>
            <div className="flex-col w-full items-start gap-4 rounded-lg bg-muted p-6">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Analysis & Suggestions</h3>
              <div className="text-sm sm:text-base text-foreground whitespace-pre-wrap font-body leading-relaxed">
                {analysis}
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}
