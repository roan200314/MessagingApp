import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get user by userId clerk
export const getUserByClerkUserId = query({
    args: { userId: v.string()},
    handler: async (ctx, {userId}) => {
        if (!userId) return null;

        return await ctx.db
        .query("users")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .first();
    },
});

//upsert/ update user
export const UpsertUser = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },
    handler: async (ctx, { userId, name, email, imageUrl }) => {
        const existingUser = await ctx.db
        .query("users")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .first();

        if (existingUser) {
            await ctx.db.patch(existingUser._id, { name, imageUrl});
            return existingUser._id;
        }

        return await ctx.db.insert("users", { userId, name, email, imageUrl})
    }
})


export const searchUsers = query({
        args: { searchTerm: v.string() },
        handler: async (ctx, { searchTerm }) => {
            if (!searchTerm.trim()) return [];

            const normalizedSearch = searchTerm.toLowerCase().trim();

            const allUsers = await ctx.db.query("users").collect();
        }
})