export interface ChatRequest {
    message: string,
    context?: "skills" | "projects" | "experience" | "education" | "profile";
}

export interface ChatResponse {
    success: boolean;
    answer: string;
    source: string;
}