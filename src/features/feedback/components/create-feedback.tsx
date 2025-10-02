"use client";
import React from "react";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  Input,
  FormDescription,
  FormMessage,
  Textarea,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { createFeedbackSchema } from "@/features/feedback/utils/create-feedback-schema";
import { useNotifications } from "@/components/ui/notification/notifications-store";
import { createFeedback } from "@/features/feedback/api/create-feedback";

export default function CreateFeedbackForm() {
  const form = useForm<z.infer<typeof createFeedbackSchema>>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof createFeedbackSchema>) {
    createFeedback({ data });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormDescription>
                This is the title of your feedback.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter description" {...field} />
              </FormControl>
              <FormDescription>
                This is the description of your feedback.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
