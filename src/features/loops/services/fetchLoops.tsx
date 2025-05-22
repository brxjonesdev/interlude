import { Result, ok, err } from "@/shared/types/result";
import { Loop } from "../types";
import { LoopsRepository } from "../repo/LoopsRepo";

export default async function fetchLoopsService(): Promise<Result<Loop[], string>> {
    const response = await LoopsRepository.fetchLoops();
    if (!response.ok) {
        return err("Error fetching loops");
    }
    return ok(response.data);
}