"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  AMOUNTS_OF_WORDS_TO_ADD,
  GERMAN_VOCAB_CATEGORIES,
  LEVELS,
} from "../constants";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { addWords } from "../data/addWords";
import { useActionState } from "react";

const formSchema = z.object({
  amount: z
    .number()
    .min(1, "Word amount must be at least 1.")
    .max(100, "Word amount must be at most 100."),
  levels: z.array(z.string()).min(1, "Please select at least one level."),
  categories: z
    .array(z.string())
    .min(1, "Please select at least one category."),
});

const defaultValues = {
  amount: AMOUNTS_OF_WORDS_TO_ADD[0],
  levels: [LEVELS[0]],
  categories: [GERMAN_VOCAB_CATEGORIES[0]],
};

function AddNewWords() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const anchor = useComboboxAnchor();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await addWords(data.amount, data.levels, data.categories);
    form.reset();
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <PlusIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <SheetHeader>
          <SheetTitle>Add New Words</SheetTitle>
          <SheetDescription>
            Add new words to your vocabulary list.
          </SheetDescription>
        </SheetHeader>
        <form
          id="add-new-words-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-4"
        >
          <FieldGroup>
            <Controller
              name="amount"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet>
                  <FieldLegend>Amount</FieldLegend>
                  <FieldDescription>
                    Select the number of words you want to add.
                  </FieldDescription>
                  <RadioGroup
                    name={field.name}
                    value={field.value.toString()}
                    onValueChange={(value) => field.onChange(Number(value))}
                    className="w-auto grid-cols-2"
                  >
                    {AMOUNTS_OF_WORDS_TO_ADD.map((amount) => (
                      <FieldLabel
                        key={amount}
                        htmlFor={`add-new-words-form-radiogroup-${amount}`}
                      >
                        <Field
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldContent>
                            <FieldTitle>{amount} words</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value={amount.toString()}
                            id={`add-new-words-form-radiogroup-${amount}`}
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />
            <Controller
              name="levels"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet>
                  <FieldLegend variant="label">Levels</FieldLegend>
                  <FieldDescription>
                    Select the levels you want to add words for.
                  </FieldDescription>
                  <FieldGroup
                    data-slot="checkbox-group"
                    className="flex-row flex-wrap"
                  >
                    {LEVELS.map((level) => (
                      <Field
                        key={level}
                        orientation="horizontal"
                        className="w-auto"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`add-new-words-form-checkbox-${level}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(level)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, level]
                              : field.value.filter((value) => value !== level);
                            field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`add-new-words-form-checkbox-${level}`}
                          className="font-normal"
                        >
                          {level}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />
            <Controller
              name="categories"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Combobox
                    multiple
                    autoHighlight
                    items={GERMAN_VOCAB_CATEGORIES}
                    defaultValue={[GERMAN_VOCAB_CATEGORIES[0]]}
                    onValueChange={field.onChange}
                  >
                    <FieldLabel>Categories</FieldLabel>
                    <FieldDescription>
                      Select the categories you want to add words for.
                    </FieldDescription>

                    <ComboboxChips ref={anchor} className="w-full max-w-xs">
                      <ComboboxValue>
                        {(values) => (
                          <React.Fragment>
                            {values.map((value: string) => (
                              <ComboboxChip key={value}>{value}</ComboboxChip>
                            ))}
                            <ComboboxChipsInput />
                          </React.Fragment>
                        )}
                      </ComboboxValue>
                    </ComboboxChips>
                    <ComboboxContent anchor={anchor}>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem
                            key={item}
                            value={item}
                            className="pointer-events-auto cursor-pointer"
                          >
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <SheetFooter>
          <Field orientation="horizontal" className="justify-end">
            <SheetClose asChild>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Close
              </Button>
            </SheetClose>
            <Button type="submit" form="add-new-words-form">
              Add Words
            </Button>
          </Field>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default AddNewWords;
